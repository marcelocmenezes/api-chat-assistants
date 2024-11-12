import { sign, verify } from "jsonwebtoken";

import { Decrypter, Encrypter } from "@/data/protocols/cryptography";
import { inject, injectable } from "tsyringe";
import { jwtConfigValues } from "@/ioc/constants";
import { JwtConfig } from "@/main/config";

@injectable()
export class JwtAdapter implements Decrypter, Encrypter {
  constructor(@inject(jwtConfigValues) private readonly jwt: JwtConfig) {}

  async decrypt(ciphertext: string): Promise<string> {
    return verify(ciphertext, this.jwt.secret) as any;
  }

  async encrypt(plaintext: string): Promise<string> {
    return sign({ id: plaintext }, this.jwt.secret);
  }
}
