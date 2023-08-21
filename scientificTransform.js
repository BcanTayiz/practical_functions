function convertMeasurement(value, fromUnit, toUnit) {
    // Define conversion factors
    const conversionFactors = {
      // Length
      meter_to_feet: 3.28084,
      feet_to_meter: 0.3048,
      mile_to_kilometer: 1.60934,
      kilometer_to_mile: 0.621371,
  
      // Mass
      kg_to_pound: 2.20462,
      pound_to_kg: 0.453592,
      gram_to_ounce: 0.03527396,
      ounce_to_gram: 28.3495,
  
      // Temperature (Celsius to Fahrenheit)
      celsius_to_fahrenheit: (celsius) => (celsius * 9/5) + 32,
      fahrenheit_to_celsius: (fahrenheit) => (fahrenheit - 32) * 5/9,
  
      // Volume
      liter_to_gallon: 0.264172,
      gallon_to_liter: 3.78541,
      liter_to_cubic_meter: 0.001,
      cubic_meter_to_liter: 1000,
  
      // Speed (kilometers per hour to miles per hour)
      kph_to_mph: 0.621371,
      mph_to_kph: 1.60934,
  
      // Pressure (pascals to psi)
      pascal_to_psi: 0.00014503773773375,
      psi_to_pascal: 6894.76,
  
      // Energy (joules to calories)
      joule_to_calorie: 0.239006,
      calorie_to_joule: 4.184,
  
      // Chemistry (moles to molecules)
      moles_to_molecules: 6.022e+23,
      molecules_to_moles: 1 / 6.022e+23,
  
      // Biology (cell count)
      cells_to_bacteria: 1e+6,
      bacteria_to_cells: 1e-6,
  
      // Custom conversions
      custom_conversion: 2, // Example custom conversion (numeric value)
    };
  
    // Check if the conversion factor exists
    const conversionKey = `${fromUnit}_to_${toUnit}`;
    if (conversionFactors.hasOwnProperty(conversionKey)) {
      // Check if the conversion factor is a function or numeric value
      const conversionFactor = conversionFactors[conversionKey];
      if (typeof conversionFactor === 'function') {
        return conversionFactor(value);
      } else {
        return value * conversionFactor;
      }
    } else {
      return "Conversion not supported";
    }
  }


module.exports = {
    convertMeasurement:convertMeasurement
}