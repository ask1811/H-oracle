import pickle
import numpy as np
import sys

model = pickle.load(open('./mlmodel2/diabetes_model.pkl', 'rb'))
input_data = (float(sys.argv[1]), float(sys.argv[2]), float(sys.argv[3]), float(sys.argv[4]), float(sys.argv[5]), float(sys.argv[6]), float(sys.argv[7]), float(sys.argv[8]), float(sys.argv[9]), float(sys.argv[10]), float(sys.argv[11]), float(sys.argv[12]))
# change the input data to a numpy array
input_data_as_numpy_array = np.asarray(input_data)

#reshaping numpy array since we are prediciting for one data point
input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)

prediction = model.predict(input_data_reshaped)
print(prediction[0])