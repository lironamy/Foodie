import { Schema, model, Document } from 'mongoose';

export interface FavoriteFood extends Document {
    user: import('mongoose').Types.ObjectId;
    food: import('mongoose').Types.ObjectId;
}

export const FavoriteFoodSchema = new Schema<FavoriteFood>({
  user: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  food: { type: Schema.Types.ObjectId, ref: 'food', required: true },
});

export const FavoriteFoodModel = model<FavoriteFood>('favorite', FavoriteFoodSchema);
