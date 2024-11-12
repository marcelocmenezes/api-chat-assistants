import { hash, compare } from "bcrypt";
import { Encrypter, Comparator } from "@/data/protocols/cryptography";

export class BcryptAdapter implements Comparator, Encrypter {
  async encrypt(plaintext: string): Promise<string> {
    return hash(plaintext, 12);
  }

  async compare(plaintext: string, digest: string): Promise<boolean> {
    return compare(plaintext, digest);
  }
}
