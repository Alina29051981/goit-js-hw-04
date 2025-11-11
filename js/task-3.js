const profile = {
  username: "Jacob",
  playTime: 300,

  changeUsername(newName) {
    username = newName;
  },

  updatePlayTime(hours) {
    this.playTime = hours;
  },

  getInfo: () => `${this.username} has ${playTime} active hours!`,
};

console.log(profile.getInfo());

profile.changeUsername("Marco");
console.log(profile.getInfo());

profile.updatePlayTime(20);
console.log(profile.getInfo());
