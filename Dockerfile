# Usa immagine Node
FROM node:20-alpine

// Aggiungere git e bash per la gestione del repository
RUN apk add --no-cache git bash

# Directory di lavoro
WORKDIR /app

# Copia package e installa dipendenze
COPY package*.json ./
RUN npm install

# Copia tutto
COPY . .

# Espone la porta di Vite
EXPOSE 5173

# Avvia vite in modalità dev
CMD ["npm", "run", "dev"]
