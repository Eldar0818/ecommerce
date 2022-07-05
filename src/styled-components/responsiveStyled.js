import { css } from "styled-components";

export function bigScreen( children ) {
    return css`
    @media screen and (max-width: 1280px) {
        ${children}
    }
    `
}
export function midBigScreen( children ) {
    return css`
    @media screen and (max-width: 1024px) {
        ${children}
    }
    `
}
export function midScreen( children ) {
    return css`
    @media screen and (max-width: 818px) {
        ${children}
    }
    `
}
export function smallScreen( children ) {
    return css`
    @media screen and (max-width: 518px) {
        ${children}
    }
    `
}

