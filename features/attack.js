/* caine attack command
 */

module.exports = function(controller) {
  // attack command
  controller.hears(new RegExp(/attack/), ['message','direct_message'], async function(bot, message) {
    const target_re = /attack ([\w\d\s]+?)$/;
    if ((m = target_re.exec(message.text)) !== null) {
      m.forEach((match, groupIndex) => {
        target = match.trim();
      });

      const attacker = message.reference.user.name;

      await controller.caine.attack(bot, attacker, target);
    }
  });
}
