export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    image: string;
    description: string;
    link: string;
  
    constructor(id: number, name: string, channel: string, seasons: number, description: string, link: string,image:string) {
      this.id = id;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.image = image;
      this.description = description;
      this.link = link;
    }

    getId() {
      return this.id;
    }
    getName() {
      return this.name;
    }
    getChannel() {
      return this.channel;
    }
    getSeasons() {
      return this.seasons;
    }
    getDescription() {
      return this.description;
    }
    getLink() {
      return this.link;
    }
    getImage() {
      return this.image;
    }
  }