import { AdEntity } from "../types";
import { ValidationError } from "../uttils/errors";

interface NewAdEntity extends Omit<AdEntity, "id"> {
  id?: string;
}

export class AdRecord implements NewAdEntity {
  public id: string;
  public name: string;
  public description: string;
  public price: number;
  public url: string;
  public lat: number;
  public lon: number;

  constructor(obj: AdEntity) {
    if (!obj.name || obj.name.length > 100) {
      throw new ValidationError(
        "Nazwa ogłoszenia niemoże być pusta, ani przekraczać 100 znaków."
      );
    }

    if (!obj.description.length || obj.description.length > 1000) {
      throw new ValidationError(
        "Treść ogłoszenia nie może być pusta, ani przekraczać 1000 znaków."
      );
    }

    if (obj.price < 0 || obj.price > 9999999) {
      throw new ValidationError(
        "Cena nie może byc mniejsza niż 0 lub większa niż 9999999."
      );
    }

    // @TODO: check if url is valid
    if (!obj.url || obj.url.length > 100) {
      throw new ValidationError(
        "Link ogłoszenia nie może być pusty ani przekraczać 100 znaków."
      );
    }

    if (typeof obj.lat !== "number" || typeof obj.lon !== "number") {
      throw new ValidationError("Nie można zlokalizować ogłoszenia.");
    }

    const { id, name, description, lat, lon, price, url } = obj;

    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.url = url;
    this.lat = lat;
    this.lon = lon;
  }
}
