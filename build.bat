cd ./frontend
call npm i
cd ../backend
call ./mvnw.cmd clean package
cd ..
start "server" java -jar backend/target/backend-0.0.1-SNAPSHOT.jar
start "client" npm start --prefix frontend
pause