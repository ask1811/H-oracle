import pickle
import numpy as np
import sys

model = pickle.load(open('./mlmodel/heart_model.pkl', 'rb'))
input_data = (int(sys.argv[1]), int(sys.argv[2]), int(sys.argv[3]), int(sys.argv[4]), int(sys.argv[5]), int(sys.argv[6]), int(sys.argv[7]), int(sys.argv[8]), int(sys.argv[9]), float(sys.argv[10]), int(sys.argv[11]), int(sys.argv[12]), int(sys.argv[13]))
#input_data = (61,0,0,130,330,0,0,169,0,0,2,0,2)
# change the input data to a numpy array
input_data_as_numpy_array = np.asarray(input_data)

#reshaping numpy array since we are prediciting for one data point
input_data_reshaped = input_data_as_numpy_array.reshape(1, -1)

prediction = model.predict(input_data_reshaped)
print(prediction[0])