import { RowDataPacket } from 'mysql2';
import connection from '../models/connection';

type Id = {
  id: string
};

const getUser = async (username: string) => {
  const [[{ id }]] = await connection.execute<(
  Id & RowDataPacket)[]>(
    'SELECT id FROM Trybesmith.Users WHERE username = ?',
    [username],
    );

  return Number(id);
};

export default getUser;