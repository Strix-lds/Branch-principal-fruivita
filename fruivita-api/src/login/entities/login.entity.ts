import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type LoginDocument = Login & Document;

@Schema()
export class Login {
    @Prop()
    user: string;

    @Prop()
    password: string;

    @Prop()
    email: string;

    @Prop()
    date: Date;

    
}

export const LoginSchema = SchemaFactory.createForClass(Login);
