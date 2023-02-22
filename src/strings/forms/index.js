const useFormsTypes = () => {
  // Fields
  const REQUIRED_FIELD = "Campo requerido";
  const REQUIRED_BOOL_TRUE = "Debes aceptar para poder continuar";
  const MAX_LENGTH_20 = "Máximo 20 caracteres";
  const MAX_LENGTH_25 = "Máximo 25 caracteres";
  const MAX_LENGTH_30 = "Máximo 30 caracteres";
  const MAX_LENGTH_35 = "Máximo 35 caracteres";

  // Name
  const ACCEPTS_ONLY_TEXT = "Solo se permiten caracteres alfabéticos";

  // Numbers
  const POSITIVE_NUMBER = "Debe ser un número positivo";
  const INTEGER_NUMBER = "Debe ser un número entero";
  const NOT_VALID_NUMBER = "El número no es válido";
  const MIN_LENGTH_NUMBER = "El número debe tener al menos 8 dígitos";
  const ERROR_DATE_AGE_GATE = "Ingrese una fecha vàlida";

  // Phone
  const LENGTH_PHONE = "El teléfono debe tener 10 dígitos";

  return {
    REQUIRED_FIELD,
    ACCEPTS_ONLY_TEXT,
    POSITIVE_NUMBER,
    INTEGER_NUMBER,
    NOT_VALID_NUMBER,
    LENGTH_PHONE,
    MIN_LENGTH_NUMBER,
    REQUIRED_BOOL_TRUE,
    ERROR_DATE_AGE_GATE,
    MAX_LENGTH_20,
    MAX_LENGTH_25,
    MAX_LENGTH_30,
    MAX_LENGTH_35,
  };
};

export default useFormsTypes;
