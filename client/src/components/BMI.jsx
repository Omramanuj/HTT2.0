import React, { useEffect, useState } from 'react';
import './BMI.css';

function BMICalculator() {
  const [heightFeet, setHeightFeet] = useState('');
  const [heightInches, setHeightInches] = useState('');
  const [heightCm, setHeightCm] = useState('');
  const [weightLbs, setWeightLbs] = useState('');
  const [weightKg, setWeightKg] = useState('');
  const [unit, setUnit] = useState('metric');
    const [bmi, setBmi] = useState('');
    const [bmiResultText,setBmiResultText] = useState('');
  

    const calculateBMI = () => {
        let heightInMeters;
        let weightInKilograms;
        let bmiClass = '';
    
        if (unit === 'imperial') {
          // Convert feet and inches to meters
          const totalHeightInInches = parseInt(heightFeet) * 12 + parseInt(heightInches);
          heightInMeters = totalHeightInInches * 0.0254;
          // Convert pounds to kilograms
          weightInKilograms = weightLbs * 0.453592;
        } else {
          // Convert centimeters to meters
          heightInMeters = heightCm / 100;
          weightInKilograms = weightKg;
        }
    
        if (heightInMeters > 0 && weightInKilograms > 0) {
          // Calculate BMI
          const bmiValue = (weightInKilograms / (heightInMeters ** 2)).toFixed(2);
          setBmi(bmiValue);
    
          // Determine the BMI class for styling
          if (bmiValue < 18.5) {
            bmiClass = 'underweight';
          } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
            bmiClass = 'normal';
          } else if (bmiValue >= 25 && bmiValue <= 29.9) {
            bmiClass = 'overweight';
          } else {
            bmiClass = 'obesity';
          }
          setBmiResultText(`Your BMI is ${bmiValue} (${bmiClass})`);
        } else {
          alert('Please enter positive numbers for both height and weight.');
        }
      };
    
      const getBmiClass = () => {
        if (bmi <= 18.5) {
          return 'bg-blue-500';
        } else if (bmi > 18.5 && bmi <= 24.9) {
          return 'bg-green-500';
        } else if (bmi >= 25 && bmi < 30) {
          return 'bg-yellow-500';
        } else {
          return 'bg-red-500';
        }
      };
    

  return (
    <div className="akhu m-3 bg-green-700  text-white p-10 rounded-lg ">
      <div className="max-w-6xl mx-auto">
        <div>Compute BMI</div>
        <h2 className="text-3xl font-bold mb-5">Calculate Your Body Mass Index</h2>
        <div className="flex items-center gap-2 mb-2">
          <label className='mr-4'>
            <input 
              type="radio" 
              name="unit" 
              value="imperial" 
              onChange={() => setUnit('imperial')} 
              checked={unit === 'imperial'}
              className='mr-2'
            />
            Imperial
          </label>
          <label>
            <input 
              type="radio" 
              name="unit" 
              value="metric" 
              onChange={() => setUnit('metric')} 
              checked={unit === 'metric'}
              className='mr-2 text-black'
            />
            Metric
          </label>
        </div>
        <div className="flex gap-3 mb-3">
          <input 
            type="number" 
            className="flex-1 p-2 border border-gray-300 text-black" 
            placeholder={unit === 'imperial' ? "FT" : "CM"} 
            value={unit === 'imperial' ? heightFeet : heightCm} 
            onChange={e =>unit === 'imperial' ? setHeightFeet(e.target.value) :setHeightCm(e.target.value)}
          />
          {unit === 'imperial' && (
            <input 
              type="number" 
              className="flex-1 p-2 border border-gray11-300 text-black" 
              placeholder="IN" 
              value={heightInches} 
              onChange={e => setHeightInches(e.target.value)}
            />
          )}
          <input 
            type="number" 
            className="flex-1 p-2 border border-gray-300 text-black" 
            placeholder={unit === 'imperial' ? "LBS" : "KG"} 
            value={unit === 'imperial' ? weightLbs : weightKg} 
            onChange={e => unit === 'imperial' ? setWeightLbs(e.target.value) : setWeightKg(e.target.value)}
          />
        </div>
        <button onClick={calculateBMI} className="bg-green-600 hover:bg-green-700 px-10 py-2 rounded">
          Calculate
        </button>
        {bmi && (
          <div className={`mt-4 p-2 rounded ${getBmiClass()}`}>
            {bmiResultText}
          </div>
        )}

      </div>
    </div>
  );
}

export default BMICalculator;
