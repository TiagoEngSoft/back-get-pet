const express = require('express');
const cors = require('cors');

const app = express();

// Configuração da porta do servidor
const PORT = process.env.PORT || 5000;

// Configurar para receber JSON nas requisições
app.use(express.json());

// Habilitar o CORS
app.use(cors());

// Pasta pública para imagens
app.use(express.static('public'));

// Rotas
const PetRoutes = require('./routes/PetRoutes');
const UserRoutes = require('./routes/UserRoutes');

app.use('/pets', PetRoutes);
app.use('/users', UserRoutes);

// Iniciar o servidor na porta determinada
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

