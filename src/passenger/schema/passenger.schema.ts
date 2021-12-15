import * as moongose from 'mongoose';

export const PassengerSchema = new moongose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

PassengerSchema.index({ email: 1 }, { unique: true });
