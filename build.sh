cd ./frontend
npm i
cd ../backend
chmod +x mvnw
./mvnw clean package
cd ..
java -jar backend/target/backend-0.0.1-SNAPSHOT.jar & npm start --prefix frontend