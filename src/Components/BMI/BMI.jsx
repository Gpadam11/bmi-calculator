import { useState } from "react";
import "./BMI.css";

const BMI = () => {
  const [weight, setWeight] = useState(""); //useState is a hook
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [message, setMessage] = useState("");

  const onWeightChangeHandler = (event) => {
    setWeight(event.target.value);
  };

  const onHeightChangeHandler = (event) => {
    setHeight(event.target.value);
  };

  const calculateBMI = () => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);
    //bmi in which height is in cm
    const bmiValue = (weightValue / (heightValue * heightValue)) * 10000;
    setBMI(bmiValue.toFixed(2));
    setMessage(getBMIStatus(bmiValue));
  };

  const getBMIStatus = (bmi) => {
    if (bmi < 18.50) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.90) {
      return "Normal weight";
    } else if (bmi > 24.90 && bmi <= 29.90) {
      return "Overweight";
    } else {
      return "Obesity";
    }
  };

  const clearForm = () => {
    setWeight("");
    setHeight("");
    setBMI(null);
    setMessage("");
  };

  return (
    <>
      <div class="container mx-auto">
        <div class="flex justify-center">
          <div class="w-1/2 ">
            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div class="mb-4 ">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  Weight (kg):
                </label>
                <input  
                  type="number"
                  class=" caret-amber-700 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Weight in kg"
                  onChange={(event) => onWeightChangeHandler(event)}
                  value={weight}
                />
              </div>
              <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  Height (cm):
                </label>
                <input 
                  type="number"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Height in cm"

                  onChange={onHeightChangeHandler}
                  value={height}
                />
              </div>


    <div class="flex items-center justify-between">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold md:py-2 md:px-4 sm:px-2 sm:py-1 rounded focus:outline-none focus:shadow-outline"
        onClick={calculateBMI}
      >
        BMI Generate
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold md:py-2 md:px-4 sm:px-2 sm:py-1 rounded focus:outline-none focus:shadow-outline"
        onClick={clearForm}
      >
        Clear BMI
      </button>
    </div>
    <div class="flex items-center justify-between">

    
    {(!weight || !height) && (
      <p class="text-red-500 text-xs italic">
        Please enter the both the weight and height
      </p>
    )}

    {bmi && (
      <div>
        <p class="text-center text-gray-700 text-base font-bold mb-2">BMI: {bmi}</p>
        <p class="text-gray-700 text-base font-bold mb-2">Status: {message}</p>
        </div>
    )}


    </div>
  </div>
</div>
</div>
</div>
</>
  );
};
export default BMI;



















