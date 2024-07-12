import {
  BaseControlDescription,
  getPropertyControls,
} from "https://esm.sh/framer@2.4.1";
import {
  ComponentType,
  ForwardRefExoticComponent,
} from "https://esm.sh/react@18.3.1";

export function getPropertyControlMap<Props = unknown>(
  component: ComponentType<Props> | ForwardRefExoticComponent<Props>,
): Record<string, keyof Props> | undefined {
  const propertyControls = getPropertyControls(component) as Record<
    keyof Props,
    BaseControlDescription
  >;

  if (propertyControls == null) {
    return undefined;
  }

  return Object.fromEntries(
    Object.entries<BaseControlDescription>(propertyControls).map((item) => {
      return [item[1].title, item[0]];
    }),
  );
}

/**
 * 프레이머 UI 컨트롤러 이름을 기반으로 컴포넌트 속성을 가져옴
 */
export function getComponentPropsByControlName<Props = unknown>(
  component: ComponentType<Props> | ForwardRefExoticComponent<Props>,
  name: string,
) {
  const propsMap = getPropertyControlMap(component);

  if (propsMap == null) {
    return undefined;
  }

  return propsMap[name];
}

/**
 * 프레이머 UI 컨트롤러 이름을 기반으로 컴포넌트 속성을 구성
 */
export function buildComponentPropsByControlNames<
  CompoentProps = unknown,
>(
  component:
    | ComponentType<CompoentProps>
    | ForwardRefExoticComponent<CompoentProps>,
  data: Record<string, unknown>,
): Record<keyof CompoentProps, string> {
  return Object.fromEntries(
    Object.entries(data).map((item) => {
      return [getComponentPropsByControlName(component, item[0]), item[1]];
    }),
  );
}
