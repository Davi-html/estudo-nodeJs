import app from './app';

const port = 3001;

app.listen(port, () => {
  console.log();
  console.log(`escotando na porta ${port}`);
  console.log(`Ctrl + Clique em http://localhost${port}`);
});
