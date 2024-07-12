declare module "componentUtils" {
    import {
        ComponentType,
        ForwardRefExoticComponent,
    } from "https://esm.sh/react@18.3.1";
    export function getPropertyControlMap<Props = unknown>(
        component: ComponentType<Props> | ForwardRefExoticComponent<Props>,
    ): Record<string, keyof Props> | undefined;
    /**
     * 프레이머 UI 컨트롤러 이름을 기반으로 컴포넌트 속성을 가져옴
     */
    export function getComponentPropsByControlName<Props = unknown>(
        component: ComponentType<Props> | ForwardRefExoticComponent<Props>,
        name: string,
    ): any;
    /**
     * 프레이머 UI 컨트롤러 이름을 기반으로 컴포넌트 속성을 구성
     */
    export function buildComponentPropsByControlNames<CompoentProps = unknown>(
        component:
            | ComponentType<CompoentProps>
            | ForwardRefExoticComponent<CompoentProps>,
        data: Record<string, unknown>,
    ): Record<keyof CompoentProps, string>;
}
declare module "formatUtils" {
    /**
     * 한국어 단위로 숫자를 포맷팅합니다. 경까지만 지원합니다.
     * ex) 1234567890 -> 123억 4567만 890원
     */
    export function formatKoreanCurrency(amount: number): string;
}
declare module "index" {
    export {
        buildComponentPropsByControlNames,
        getComponentPropsByControlName,
    } from "componentUtils";
    export { formatKoreanCurrency } from "formatUtils";
}
