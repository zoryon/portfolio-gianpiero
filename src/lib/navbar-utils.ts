import { BLOCKED_LINKS } from "./navbar-constants";

const blockedLinksSet = new Set(BLOCKED_LINKS.map(link => link.toLowerCase()));

export function getLinkProps(label: string, pathname: string) {
    const lowerLabel = label.toLowerCase();
    const normalizedPathname = pathname.startsWith("/") ? pathname.slice(1) : pathname;

    const isBlocked = blockedLinksSet.has(lowerLabel);
    const isActive = !isBlocked && (
        (lowerLabel === "home" && (pathname === "/" || normalizedPathname === "")) 
        || normalizedPathname === lowerLabel
    );

    const href = isBlocked ? "#" : (lowerLabel === "home" ? "/" : lowerLabel);

    let textColor = "text-foreground";
    if (isBlocked) textColor = "text-zinc-800";
    else if (isActive) textColor = "text-subtle";

    return { href, textColor, isBlocked, isActive };
}
