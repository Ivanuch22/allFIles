import { makeAutoObservable } from "mobx";
import React from "react";

interface ICart {
  id: string;
  name: string;
  price: number;
  oldPrice: number;
  images: string[];
  isLike: boolean;
  isAdd: boolean;
  description: string;
  about: string;
  type: IType[];
  imgOrdered: string[];
  features: IFeatures[];
}
interface IFeatures {
  [key: string]: string;
}
interface IType {
  name: string;
  isActive: boolean;
  img: string;
}

class MainStore {
  data: ICart[] = [];
  likedCarts: ICart[] = [];
  addedCarts: ICart[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  get getData() {
    return this.data;
  }
  get getLikedCarts() {
    return this.data.filter((cart, index) => cart.isLike);
  }
  get getAddedCarts() {
    return this.addedCarts;
  }
  sortAndCountByName(objects: ICart[]) {
    const nameCountMap: {
      [key: string]: {
        name: string;
        count: number;
        type?: { isActive: boolean; img: string }[];
      };
    } = {};

    objects.forEach((obj) => {
      const { name, type, ...rest } = obj;
      const key =
        type && type.length > 0 ? `${name}-${JSON.stringify(type)}` : name;

      if (key in nameCountMap) {
        nameCountMap[key].count++;
      } else {
        nameCountMap[key] = {
          name,
          count: 1,
          type: type ? [...type] : undefined,
          ...rest,
        };
      }
    });

    const sortedObjects = Object.values(nameCountMap).sort((a, b) => {
      const nameComparison = a.name.localeCompare(b.name);

      if (nameComparison === 0) {
        // If names are equal, compare by type length
        const typeLengthComparison =
          (b.type?.length || 0) - (a.type?.length || 0);

        if (typeLengthComparison === 0 && a.type && b.type) {
          // If type lengths are equal, compare by type names
          const typeNameComparison = a.type[0].isActive ? -1 : 1;

          return typeNameComparison;
        }

        return typeLengthComparison;
      }

      return nameComparison;
    });

    return sortedObjects;
  }

  addCart(e: React.MouseEvent, cart: ICart) {
    e.preventDefault();
    this.addedCarts.push(cart);
  }
}
export default new MainStore();
