// TODO: Define a City class with name and id properties

// TODO: Complete the HistoryService class
// class HistoryService {
  // TODO: Define a read method that reads from the searchHistory.json file
  // private async read() {}
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
  // private async write(cities: City[]) {}
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
  // async getCities() {}
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  // async addCity(city: string) {}
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
  // async removeCity(id: string) {}
// }

// export default new HistoryService();
// export default new HistoryService();
import fs from 'fs/promises';
class City {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}
   class HistoryService {
    private filePath: string;

    constructor() {
      this.filePath = 'searchHistory.json';
    }
    private async read() {
      const data = await fs.readFile('searchHistory.json', {
        flag: 'a+',
        encoding: 'utf8',
      });
      return data ? JSON.parse(data) : [];
    }

  async write(cities: City[]) {
    const data = JSON.stringify(cities, null, 2);
    await fs.writeFile(this.filePath, data, 'utf-8');
  }

  async getCities() {
    const cities = await this.read();
    return cities.map((city: any) => new City(city.name, city.id));
  }

  async addCity(name: string) {
    const cities = await this.getCities();
    const id = cities.length ? Math.max(cities.map((city: City) => city.id)) + 1 : 1;
    const newCity = new City(name, id);
    cities.push(newCity);
    await this.write(cities);
  }

  async removeCity(id: number) {
    let cities = await this.getCities();
    cities = cities.filter((city: City) => city.id !== id);
    await this.write(cities);
  }
}

export default new HistoryService();