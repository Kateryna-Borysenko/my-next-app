import * as SvgIconsComponent from '../components/icons';

export const getIconComponentByName = (name) => {
  const ComponentsMap = {
    facebook: SvgIconsComponent.Facebook,
    instagram: SvgIconsComponent.Instagram,
    linkedin: SvgIconsComponent.Linkedin,
    github: SvgIconsComponent.Github
  };

  if (name in ComponentsMap) {
    const IconComponent = ComponentsMap[name];
    return <IconComponent />;
  } else {
    return null;
  }
};