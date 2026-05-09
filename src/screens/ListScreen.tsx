import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import { listStyles } from "../styles/appStyles";
import { ScreenProps } from "../navigation/typesNavigation";
import { useCallback, useState } from "react";
import { Gadget } from "../types/gadget";
import { gadgetService } from "../services/gadgetService";
import { useFocusEffect } from "@react-navigation/native";

type Props = ScreenProps<"List">;

export const ListScreen = ({ navigation }: Props) => {
  const [gadgets, setGadgets] = useState<Gadget[]>([]);

  //Verificar la carga, para evitar que la pantalla se muestre vacía
  const [loading, setLoading] = useState<boolean>(false);

  //Buscar por nombre
  const [searchText, setSearchText] = useState<string>("");

  //useFocusEffect: permite ejecutar loadcCourses cada vez que la pantalla vuelve
  //a estar isible.
  //Así grarantizamos que siempre veamos los datos actualizados.
  useFocusEffect(
    useCallback(() => {
      loadGadgets();
    }, []),
  );

  const loadGadgets = async (): Promise<void> => {
    try {
      setLoading(true);
      const data = await gadgetService.getAll();
      setGadgets(data);
    } catch (error) {
      Alert.alert("Error", "No se puede cargar los gadgets");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  //Arreglo con datos filrados
  const filteredGadgets = gadgets.filter(
    (gadget) =>
      gadget.name.toLowerCase().includes(searchText.toLowerCase()) ||
      gadget.brand.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <View style={listStyles.container}>
      {/* Search bar */}
      <View style={listStyles.searchContainer}>
        <TextInput
          style={listStyles.searchInput}
          placeholder="🔍 Buscar por nombre..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <Text style={listStyles.counterText}>
        {searchText
          ? `${filteredGadgets.length} resultado(s) encontrados`
          : `${gadgets.length} gadgets registrados`}
      </Text>

      <FlatList
        data={filteredGadgets}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={listStyles.list}
        ListEmptyComponent={
          <Text style={listStyles.emptyText}>
            <Text style={listStyles.emptyText}>
              {loading
                ? "Cargando..."
                : searchText
                  ? "Gadget no encontrado"
                  : "Todavía no hay gadgets. Crea el primer gadget!"}
            </Text>
          </Text>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={listStyles.card}
            onPress={() => navigation.navigate("Detail", { id: item.id })}
          >
            <Text style={listStyles.cardName}>{item.name}</Text>
            <Text style={listStyles.cardDetail}>
              {item.brand} - {item.purchaseYear}
            </Text>
            <Text style={listStyles.cardGenre}>{item.category}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={listStyles.fab}
        onPress={() => navigation.navigate("Form", {})}
      >
        <Text style={listStyles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};
