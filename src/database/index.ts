import { connect, connection } from 'mongoose';

const dbConnect = () => {
  connect(process.env.MONGO_URI);

  connection.once('open', () => {
    console.log('connected to database');
  });
};

export default dbConnect;
