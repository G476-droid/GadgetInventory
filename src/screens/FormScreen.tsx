import React, { useEffect, useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import { formStyles } from "../styles/appStyles";
import { ScreenProps } from "../navigation/typesNavigation";
import { NewGadget } from "../types/gadget";
import { gadgetService } from "../services/gadgetService";

type Props = ScreenProps<"Form">;

export const FormScreen = ({ route, navigation }: Props) => {
  const id = route.params?.id;
  const isEditMode: boolean = id !== undefined;

  const [form, setForm] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    purchaseYear: "",
  });

  const [saving, setSaving] = useState<boolean>(false);

  useEffect(() => {
    if (isEditMode && id !== undefined) {
      loadGadget(id);
    }
  }, [id]);

  const loadGadget = async (gadgetId: number): Promise<void> => {
    try {
      const gadget = await gadgetService.getById(gadgetId);

      if (gadget === null) {
        Alert.alert("Error", "Gadget no encontrado");
        navigation.goBack();
        return;
      }

      setForm({
        name: gadget.name,
        brand: gadget.brand,
        category: gadget.category,
        price: gadget.price.toString(),
        purchaseYear: gadget.purchaseYear.toString(),
      });
    } catch (error) {
      Alert.alert("Error", "No se pudo cargar el gadget");
      console.error(error);
    }
  };

  const handleInputChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleSave = async (): Promise<void> => {
    if (
      form.name.trim() === "" ||
      form.brand.trim() === "" ||
      form.category.trim() === "" ||
      form.price.trim() === "" ||
      form.purchaseYear.trim() === ""
    ) {
      Alert.alert("Campos incompletos", "Por favor, llena todos los campos");
      return;
    }

    const yearNumber = Number(form.purchaseYear);

    if (isNaN(yearNumber) || yearNumber < 1000 || yearNumber > 2026) {
      Alert.alert("Año inválido", "Ingrese un año entre 1000 y 2026");
      return;
    }

    const newGadget: NewGadget = {
      name: form.name.trim(),
      brand: form.brand.trim(),
      purchaseYear: yearNumber,
      category: form.category.trim(),
      price: Number(form.price.trim()),
    };

    try {
      setSaving(true);

      if (isEditMode && id !== undefined) {
        await gadgetService.update(id, newGadget);

        Alert.alert("Exitoso", "Gadget actualizado con éxito", [
          {
            text: "OK",
            onPress: () => navigation.goBack(),
          },
        ]);
      } else {
        await gadgetService.create(newGadget);

        Alert.alert("Exitoso", "Gadget creado con éxito", [
          {
            text: "OK",
            onPress: () => navigation.goBack(),
          },
        ]);
      }
    } catch (error) {
      Alert.alert("Error", "No se logró guardar el gadget");
      console.error(error);
    } finally {
      setSaving(false);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <ScrollView
        style={formStyles.container}
        contentContainerStyle={formStyles.scrollContent}
      >
        <Text style={formStyles.title}>
          {isEditMode ? "Editar Gadget" : "Nuevo Gadget"}
        </Text>

        <Text style={formStyles.label}>Nombre *</Text>
        <TextInput
          style={formStyles.input}
          value={form.name}
          onChangeText={(value) => handleInputChange("name", value)}
          placeholder="Ej: iPhone"
          maxLength={60}
        />

        <Text style={formStyles.label}>Marca *</Text>
        <TextInput
          style={formStyles.input}
          value={form.brand}
          onChangeText={(value) => handleInputChange("brand", value)}
          placeholder="Ej: Apple"
          maxLength={60}
        />

        <Text style={formStyles.label}>Año *</Text>
        <TextInput
          style={formStyles.input}
          value={form.purchaseYear}
          onChangeText={(value) => handleInputChange("purchaseYear", value)}
          keyboardType="numeric"
          placeholder="Ej: 2008"
        />

        <Text style={formStyles.label}>Categoría *</Text>
        <TextInput
          style={formStyles.input}
          value={form.category}
          onChangeText={(value) => handleInputChange("category", value)}
          placeholder="Ej: Programación"
          maxLength={60}
        />

        <Text style={formStyles.label}>Precio *</Text>
        <TextInput
          style={formStyles.input}
          value={form.price}
          onChangeText={(value) => handleInputChange("price", value)}
          keyboardType="numeric"
          placeholder="Ej: 999.99"
        />

        <TouchableOpacity
          style={[
            formStyles.saveButton,
            saving && formStyles.saveButtonDisabled,
          ]}
          onPress={handleSave}
          disabled={saving}
        >
          <Text style={formStyles.saveButtonText}>
            {saving
              ? "Guardando..."
              : isEditMode
              ? "Actualizar Gadget"
              : "Guardar Gadget"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={formStyles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={formStyles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};