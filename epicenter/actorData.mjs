const { HTMLField, NumberField, SchemaField, StringField } = foundry.data.fields;

/* -------------------------------------------- */
/*  Actor Models                                */
/* -------------------------------------------- */

class ActorDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    // All Actors have resources.
    return {
      resources: new SchemaField({
        health: new SchemaField({
          min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          value: new NumberField({ required: true, integer: true, min: 0, initial: 10 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 10 })
        }),
        tempHealth: new SchemaField({
          min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          value: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 0 })
        })
      })
    };
  }
}

//Unit and Faceless do not yet have any differences from base actor model, but will have different logic and sheets
export class UnitDataModel extends ActorDataModel {}

export class FacelessDataModel extends ActorDataModel {}

/* -------------------------------------------- */
/*  Item Models                                 */
/* -------------------------------------------- */

class ItemDataModel extends foundry.abstract.TypeDataModel {
  static defineSchema() {
    return {
      tier: new NumberField({ required: true, integer: true, min: 0, initial: 1, max: 5 }),
      price: new NumberField({ required: true, integer: true, min: 0, initial: 20 })
    };
  }
}

export class weaponDataModel extends ItemDataModel {
  static defineSchema() {
    return {
      damage: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
      hitRate: new NumberField({ required: true, integer: true, min: 0, initial: 10 })
    };
  }
}

export class armorDataModel extends ItemDataModel {
  static defineSchema() {
    return {
      defense: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
      resistance: new NumberField({ required: true, integer: true, min: 0, initial: 0 })
    };
  }
}

export consumable consumableDataModel extends ItemDataModel {
  static defineSchema() {
    return {
      uses: new SchemaField({
          min: new NumberField({ required: true, integer: true, min: 0, initial: 0 }),
          value: new NumberField({ required: true, integer: true, min: 0, initial: 2 }),
          max: new NumberField({ required: true, integer: true, min: 0, initial: 2 })
      }
    };
  }
}

CONFIG.Actor.trackableAttributes = {
  unit: {
    bar: ["resources.hp", "resources.temp"],
    value: []
  },
  faceless: {
    bar: ["resources.hp", "resources.temp"],
    value: []
  }
};







