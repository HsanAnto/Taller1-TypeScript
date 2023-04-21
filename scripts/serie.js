var Serie = /** @class */ (function () {
    function Serie(id, name, channel, seasons, description, link, image) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.image = image;
        this.description = description;
        this.link = link;
    }
    Serie.prototype.getId = function () {
        return this.id;
    };
    Serie.prototype.getName = function () {
        return this.name;
    };
    Serie.prototype.getChannel = function () {
        return this.channel;
    };
    Serie.prototype.getSeasons = function () {
        return this.seasons;
    };
    Serie.prototype.getDescription = function () {
        return this.description;
    };
    Serie.prototype.getLink = function () {
        return this.link;
    };
    Serie.prototype.getImage = function () {
        return this.image;
    };
    return Serie;
}());
export { Serie };
