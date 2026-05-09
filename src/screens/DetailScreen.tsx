import React, { useState, useCallback } from "react";
import { View, Text, TouchableOpacity, Alert, ScrollView } from "react-native";
import { ScreenProps } from "../navigation/typesNavigation";
import { Gadget } from "../types/gadget";
import { gadgetService } from "../services/gadgetService";
import { useFocusEffect } from "@react-navigation/native";
import { detailStyles } from "../styles/appStyles";

type Props = ScreenProps<"Detail">;

export default function DetailScreen({ route, navigation }: Props) {
  const { id } = route.params;

  const [gadget, setGadget] = useState<Gadget | null>(null);

  useFocusEffect(
    useCallback(() => {
      loadGadget();
    }, []),
  );

  const loadGadget = async (): Promise<void> => {
    try {
      const data = await gadgetService.getById(id);
      setGadget(data);
      if (data === null) {
        Alert.alert("Error", "Gadget no encontrado");
        navigation.goBack();
        return;
      }
    } catch (error) {
      Alert.alert("Error", "No se puede cargar el gadget");
      console.error(error);
    }
  };

  const confirmDelete = (): void => {
    if (gadget === null) return;

    Alert.alert(
      "Eliminar gadget",
      `Estás seguro que quieres eliminar el gadget "${gadget.name}"? Está acción no se puede deshacer.`,
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Eliminar", style: "destructive", onPress: handleDelete },
      ],
    );
  };

  const handleDelete = async (): Promise<void> => {
    if (gadget === null) return;
    try {
      await gadgetService.delete(gadget.id);
      Alert.alert("Exitoso", "Gadget eliminado con éxito");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", "El gadget no se puede eliminar");
      console.error(error);
    }
  };

  if (gadget === null) {
    return (
      <View style={detailStyles.container}>
        <Text style={detailStyles.loadingText}>Cargando....</Text>
      </View>
    );
  }

  return (
    <ScrollView style={detailStyles.container}>
      <View style={detailStyles.card}>
        <Text style={detailStyles.title}>{gadget.name}</Text>

        <View style={detailStyles.field}>
          <Text style={detailStyles.label}>CATEGORY</Text>
          <Text style={detailStyles.value}>{gadget.category}</Text>
        </View>

        <View style={detailStyles.row}>
          <View style={detailStyles.halfCard}>
            <Text style={detailStyles.label}>BRAND</Text>
            <Text style={detailStyles.value}>{gadget.brand}</Text>
          </View>

          <View style={detailStyles.halfCard}>
            <Text style={detailStyles.label}>YEAR</Text>
            <Text style={detailStyles.value}>{gadget.purchaseYear}</Text>
          </View>
        </View>

        <View style={detailStyles.priceCard}>
          <Text style={detailStyles.label}>PRICE</Text>
          <Text style={detailStyles.priceValue}>$ {gadget.price}</Text>
        </View>

        <View style={detailStyles.buttonRow}>
          <TouchableOpacity
            style={detailStyles.editButton}
            onPress={() => navigation.navigate("Form", { id: gadget.id })}
          >
            <Text style={detailStyles.editButtonText}>Editar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={detailStyles.deleteButton}
            onPress={confirmDelete}
          >
            <Text style={detailStyles.deleteButtonText}>Eliminar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
