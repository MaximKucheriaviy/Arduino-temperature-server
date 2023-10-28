interface IDotenv {
  parsed: {
    PORT: string;
    MDB_CONNECTION: string | undefined;
    SECRET_WORD: string | undefined;
    [x: string]: string | undefined;
  };
}

export default IDotenv;
