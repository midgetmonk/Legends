export default async function preloadHandlebarsTemplates(){
  const templatePaths = [
    "systems/RyanTestLegends/templates/partials/description-editor.hbs",
    "systems/RyanTestLegends/templates/partials/move-card.hbs",
    "systems/RyanTestLegends/templates/partials/condition-card.hbs",
    "systems/RyanTestLegends/templates/partials/status-card.hbs",
    "systems/RyanTestLegends/templates/partials/technique-card.hbs",
    "systems/RyanTestLegends/templates/partials/growth-question-card.hbs",
    "systems/RyanTestLegends/templates/partials/labelled-input.hbs",
    "systems/RyanTestLegends/templates/partials/npc-principle-card.hbs",
    "systems/RyanTestLegends/templates/sheets/actors/_balance.hbs",
    "systems/RyanTestLegends/templates/sheets/actors/_fatigue.hbs",
    "systems/RyanTestLegends/templates/sheets/actors/_stats.hbs",
    "systems/RyanTestLegends/templates/sheets/actors/_trainings.hbs",
    "systems/RyanTestLegends/templates/partials/checkbox.hbs",
    "templates/dice/roll.html"
  ];

  return loadTemplates(templatePaths);
};
