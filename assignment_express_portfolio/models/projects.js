
class ChucksProject {
  constructor(link, name, skills, gitLink, imagePath) {
    this.link = link;
    this.name = name;
    this.skills = skills;
    this.gitLink = gitLink;
    this.imagePath = imagePath;
  }
}

const projects = [
  new ChucksProject("building_server", "Build a node.js server", "node.js, javascript, http and file system librarys", "https://github.com/chuckinabox/assignment_build_a_nodejs_server", "images/build_a_nodejs_server_screenshot.png" ),
  new ChucksProject("jquery_tagging", "jQuery phototagging",	"jQuery, javascript, html, sass", "https://github.com/chuckinabox/assignment_jq_ee_sprint", "images/jquery_phototagging_screenshot.png"),
  new ChucksProject("music_play", "Royalty Free music player", "html bootstrap jQuery Javascript",
"https://github.com/chuckinabox/assignment_royalty_free_music_player", "images/royalty_free_music_player_screenshot.png"),
  new ChucksProject("facebook_clone", "Facebook clone", "html, css, sass", "https://github.com/chuckinabox/project_prep_facebook_pages", "images/facelook_screenshot.png")
]

module.exports = {ChucksProject, projects};
