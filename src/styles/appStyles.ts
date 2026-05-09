
import { StyleSheet } from "react-native";
export const COLORS = {
  primary: "#205781",
  secondary: "#4F959D",
  background: "#0F172A",
  white: "#FFFFFF",
  text: "#111827",
  gray: "#6B7280",
  border: "#E5E7EB",
  success: "#DCFCE7",
};

export const listStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },

  counterText: {
  color: "#94A3B8",
  marginHorizontal: 16,
  marginBottom: 8,
  fontWeight: "600",
},

  header: {
    backgroundColor: "#205781",
    paddingTop: 50,
    paddingBottom: 22,
    paddingHorizontal: 20,
  },

  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "800",
  },

  search: {
    backgroundColor: "#fff",
    margin: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  counter: {
    marginHorizontal: 16,
    marginBottom: 8,
    color: "#6B7280",
    fontWeight: "600",
  },

  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 18,
    borderRadius: 16,
    borderLeftWidth: 5,
    borderLeftColor: "#205781",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },

  bookTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#205781",
  },

  author: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 4,
  },

  badges: {
    flexDirection: "row",
    marginTop: 12,
    gap: 8,
  },

  year: {
    backgroundColor: "#DBEAFE",
    color: "#205781",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    fontWeight: "700",
  },

  genre: {
    backgroundColor: "#DCFCE7",
    color: "#166534",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
    fontWeight: "700",
  },

  empty: {
    textAlign: "center",
    color: "#6B7280",
    marginTop: 80,
    fontSize: 16,
  },

  fab: {
    position: "absolute",
    right: 24,
    bottom: 30,
    backgroundColor: "#205781",
    width: 62,
    height: 62,
    borderRadius: 31,
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
  },

  fabText: {
    color: "#fff",
    fontSize: 34,
    marginTop: -2,
  },

  searchContainer: {
  paddingHorizontal: 16,
  paddingTop: 16,
},

searchInput: {
  backgroundColor: "#fff",
  borderWidth: 1,
  borderColor: "#E5E7EB",
  borderRadius: 14,
  paddingHorizontal: 14,
  paddingVertical: 12,
  fontSize: 14,
},

list: {
  paddingBottom: 100,
},

emptyText: {
  textAlign: "center",
  color: "#6B7280",
  marginTop: 80,
  fontSize: 16,
},

cardName: {
  fontSize: 18,
  fontWeight: "800",
  color: "#205781",
},

cardDetail: {
  fontSize: 14,
  color: "#6B7280",
  marginTop: 4,
},

cardGenre: {
  fontSize: 13,
  color: "#166534",
  backgroundColor: "#DCFCE7",
  alignSelf: "flex-start",
  paddingHorizontal: 10,
  paddingVertical: 5,
  borderRadius: 12,
  marginTop: 10,
  fontWeight: "700",
},
});

export const formStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },

  title: {
  fontSize: 28,
  fontWeight: "800",
  color: "#205781",
  marginBottom: 20,
},

saveButton: {
  backgroundColor: "#205781",
  paddingVertical: 15,
  borderRadius: 12,
  alignItems: "center",
  marginTop: 24,
},

saveButtonDisabled: {
  opacity: 0.6,
},

saveButtonText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "800",
},

cancelButton: {
  backgroundColor: "#fff",
  paddingVertical: 15,
  borderRadius: 12,
  alignItems: "center",
  marginTop: 12,
  borderWidth: 1,
  borderColor: "#E5E7EB",
},

cancelButtonText: {
  color: "#6B7280",
  fontSize: 16,
  fontWeight: "700",
},

  scrollContent: {
  paddingBottom: 30,
},

  hero: {
    padding: 20,
  },

  heroTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#205781",
  },

  heroSubtitle: {
    color: "#6B7280",
    marginTop: 4,
  },

  form: {
    paddingHorizontal: 20,
  },

  label: {
    marginTop: 14,
    marginBottom: 6,
    color: "#374151",
    fontWeight: "700",
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
  },

  saveBtn: {
    backgroundColor: "#205781",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 24,
  },

  saveBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "800",
  },

  cancelBtn: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  cancelBtnText: {
    color: "#6B7280",
    fontSize: 16,
    fontWeight: "700",
  },

  
});

export const detailStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    padding: 20,
  },

  loadingText: {
    textAlign: "center",
    marginTop: 80,
    fontSize: 16,
    color: "#6B7280",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    elevation: 3,
  },

  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#205781",
    marginBottom: 20,
  },

  field: {
    marginBottom: 16,
  },

  label: {
    fontSize: 13,
    color: "#6B7280",
    fontWeight: "700",
  },

  value: {
    fontSize: 16,
    color: "#111827",
    marginTop: 4,
  },

  buttonContainer: {
    marginTop: 20,
  },

  editButton: {
    backgroundColor: "#205781",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 10,
  },

  editButtonText: {
    color: "#fff",
    fontWeight: "800",
  },

  deleteButton: {
    backgroundColor: "#DC2626",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },

  deleteButtonText: {
    color: "#fff",
    fontWeight: "800",
  },
});