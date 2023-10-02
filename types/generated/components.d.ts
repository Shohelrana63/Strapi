import type { Schema, Attribute } from '@strapi/strapi';

export interface ButtonBoxButton extends Schema.Component {
  collectionName: 'components_button_box_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    btn_text: Attribute.String & Attribute.Required;
    btn_link: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'button-box.button': ButtonBoxButton;
    }
  }
}
