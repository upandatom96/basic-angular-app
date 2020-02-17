import { UserDetails } from "../models/UserDetails.model";
import { HttpHeaders } from "@angular/common/http";

export abstract class CookieHelper {

  public static headers() {
    const headers = new HttpHeaders()
      .set("Content-Type", "application/json");
    return {
      headers,
    };
  }

  public static getToken(): string {
    return localStorage.getItem("auth-token");
  }

  public static removeToken(): void {
    window.localStorage.removeItem("auth-token");
  }

  public static saveToken(token: string): void {
    localStorage.setItem("auth-token", token);
  }

  public static getUserDetails(): UserDetails {
    let payload;
    const token = CookieHelper.getToken();
    if (token) {
      payload = token.split(".")[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public static isLoggedOn(): boolean {
    const user = CookieHelper.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }
}
