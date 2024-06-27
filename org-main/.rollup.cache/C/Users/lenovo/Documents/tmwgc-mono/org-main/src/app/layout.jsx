import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
var Jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
export var metadata = {
    title: "TMWGC | The Meta Web3 Global Consortium",
    description: "Building an open-source, truly decentralized ecosystem for the immersive future.",
};
export default function RootLayout(_a) {
    var children = _a.children;
    return (<html lang="en">
      <body className={Jakarta.className}>{children}</body>
    </html>);
}
//# sourceMappingURL=layout.jsx.map