# DYOR Code Analyzer - RepoMind Style

Frontend de análisis de repositorios GitHub con estilo RepoMind, convertido de Next.js a React + Vite.

## 🚀 Instalación Rápida

```bash
# 1. Instalar dependencias
npm install

# 2. Configurar variables de entorno
cp .env.example .env
# Editar .env con tus keys:
# GITHUB_TOKEN=ghp_xxx
# OPENAI_API_KEY=sk-xxx

# 3. Iniciar desarrollo
npm run dev
```

## ⚠️ IMPORTANTE: Tailwind CSS Requerido

Este proyecto usa **Tailwind CSS**. Si el frontend aparece deformado o sin estilos, verifica que:

1. Las dependencias de Tailwind estén instaladas:
```bash
npm install -D tailwindcss postcss autoprefixer
npm install @tailwindcss/typography
```

2. El archivo `src/main.jsx` importe Tailwind:
```jsx
import './styles/tailwind.css'
```

3. Los archivos de configuración existan:
- `tailwind.config.js`
- `postcss.config.js`

## 📁 Estructura del Proyecto

```
├── api/code-analyzer/          # Vercel Serverless Functions
│   ├── fetch.js                # Fetch repo con Git Trees API
│   ├── chat.js                 # Chat streaming con GPT-4o-mini
│   ├── analyze.js              # Selección de archivos relevantes
│   ├── scan.js                 # Security scanning
│   ├── search.js               # Búsqueda text/regex/AST
│   ├── quality.js              # Análisis de calidad
│   ├── generate.js             # Generación de docs/tests
│   └── fix-mermaid.js          # AI fix para diagramas
│
├── src/
│   ├── components/code-analyzer/
│   │   ├── ChatInterface.jsx   # Chat principal
│   │   ├── CodeBlock.jsx       # Syntax highlighting
│   │   ├── Mermaid.jsx         # Diagramas con export PNG
│   │   ├── DevTools.jsx        # Search/Quality/Generate
│   │   ├── RepoSidebar.jsx     # File tree con stats
│   │   ├── RepoLayout.jsx      # Layout principal
│   │   ├── FilePreview.jsx     # Preview de archivos
│   │   └── ...más componentes
│   │
│   ├── lib/code-analyzer/      # Utilidades
│   │   ├── tokens.js
│   │   ├── storage.js
│   │   ├── diagram-utils.js
│   │   └── markdown-utils.js
│   │
│   ├── pages/
│   │   ├── CodeAnalyzer.jsx    # Router wrapper
│   │   ├── CodeAnalyzerHome.jsx # Landing page
│   │   └── CodeAnalyzerChat.jsx # Chat page
│   │
│   └── styles/
│       └── tailwind.css        # Tailwind + custom styles
│
├── tailwind.config.js
├── postcss.config.js
└── vercel.json
```

## 🔧 Variables de Entorno

Crear archivo `.env` en la raíz:

```env
# GitHub Personal Access Token (para aumentar rate limit)
GITHUB_TOKEN=ghp_xxxxxxxxxxxx

# OpenAI API Key
OPENAI_API_KEY=sk-xxxxxxxxxxxx
```

## 🎨 Features

- ✅ Chat con streaming SSE
- ✅ Diagramas Mermaid con export PNG
- ✅ DevTools: Search, Quality Analysis, Generate
- ✅ Security scanning
- ✅ File preview modal
- ✅ Sidebar con file tree y stats
- ✅ Smart Links (auto-render GitHub cards)
- ✅ Token counter con warnings
- ✅ Persistencia de conversaciones

## 📝 Rutas

- `/code-analyzer` - Landing page
- `/code-analyzer/:owner/:repo` - Chat de repositorio

## 🚀 Deploy en Vercel

1. Conectar repo a Vercel
2. Configurar variables de entorno en Vercel Dashboard
3. Deploy automático

## 🔄 Integración con Proyecto Existente

Si ya tienes un proyecto DYOR Scanner:

1. Copia la carpeta `src/components/code-analyzer/`
2. Copia la carpeta `src/lib/code-analyzer/`
3. Copia la carpeta `api/code-analyzer/`
4. Copia las páginas de `src/pages/CodeAnalyzer*.jsx`
5. Agrega Tailwind si no lo tienes
6. Actualiza tu `App.jsx` con las rutas

## 📦 Dependencias Clave

```json
{
  "dependencies": {
    "framer-motion": "^12.x",
    "lucide-react": "^0.469.x",
    "mermaid": "^11.x",
    "html2canvas-pro": "^1.x",
    "react-markdown": "^9.x",
    "react-syntax-highlighter": "^15.x",
    "remark-gfm": "^4.x"
  },
  "devDependencies": {
    "tailwindcss": "^3.4.x",
    "@tailwindcss/typography": "^0.5.x"
  }
}
```
