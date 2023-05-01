import { onScopeDispose } from "vue";

export function useScopeDispose() {
    onScopeDispose(() => {
        console.log("effect 作用域被取消")
    })
}