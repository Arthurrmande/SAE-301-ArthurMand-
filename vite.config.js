import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/nom-du-repo/",  // ⚠️ Remplacer par le nom de votre dépôt GitHub
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "page-accueil.html"),

        cathoodies: resolve(__dirname, "pages/cat-hoodies.html"),
        cattshirt: resolve(__dirname, "pages/cat-tshirt.html"),
        catvestes: resolve(__dirname, "pages/cat-vestes.html"),
        
        pageconnexion: resolve(__dirname, "pages/page-connexion.html"),

        pagecreacompte: resolve(__dirname, "pages/page-creacompte.html"),

        pagefinalcommande1: resolve(__dirname, "pages/page-finalcommande1.html"),
        pagefinalcommande2: resolve(__dirname, "pages/page-finalcommande2.html"),
        pagefinalcommande3: resolve(__dirname, "pages/page-finalcommande3.html"),

        pagepanier: resolve(__dirname, "pages/page-panier.html"),

        pagepanierconf: resolve(__dirname, "pages/page-panierconf.html"),

        pageproduit: resolve(__dirname, "pages/page-produit.html"),

        pageprofile1: resolve(__dirname, "pages/page-profile1.html"),
        pageprofile2: resolve(__dirname, "pages/page-profile2.html"),
        pageprofile3: resolve(__dirname, "pages/page-profile3.html"),

        pagerecapcommande: resolve(__dirname, "pages/page-recapcommande.html"),
      },
    },
  },
});