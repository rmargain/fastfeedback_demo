import React from "react";
import { theme as chakraTheme } from "@chakra-ui/react";

const theme = {
  ...chakraTheme,
  fonts: {
    ...chakraTheme.fonts,
    body: `Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
    heading: `Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700,
  },
  icons: {
    ...chakraTheme.icons,
    logo: {
      path: (
        <g>
          <path d="m73.214844 4.195312.804687-1.6875h-8.886719v9.96875h8.082032l.804687-1.714843h-7V8.335938h4.1875l.800781-1.6875h-4.988281V4.195312ZM14.429688 12.492188h2.089843l.929688-1.6875h4.730469l.929687 1.6875H25.1875L19.808594 2.53125ZM21.25 9.109375h-2.871094L19.816406 6.5ZM30.449219 2.507812h-1.894531v9.984376H34.875l.804688-1.691407h-5.230469ZM47.773438 3.835938c-.46875-.472657-1.023438-.847657-1.628907-1.113282-1.273437-.542968-2.714843-.542968-3.988281 0-1.230469.53125-2.207031 1.523438-2.730469 2.765625-.539062 1.289063-.539062 2.742188 0 4.03125.527344 1.238281 1.503907 2.226563 2.730469 2.753907 1.273438.546874 2.714844.546874 3.988281 0 1.226563-.527344 2.203125-1.515626 2.730469-2.753907.539062-1.289062.539062-2.742187 0-4.03125-.261719-.617187-.632812-1.175781-1.101562-1.652343Zm-.640626 4.960937c-.167968.398437-.402343.765625-.695312 1.085937-.292969.3125-.640625.566407-1.027344.75-.796875.371094-1.71875.371094-2.519531 0-.386719-.183593-.734375-.4375-1.027344-.75-.292969-.320312-.527343-.6875-.695312-1.085937-.339844-.828125-.339844-1.757813 0-2.585937.164062-.402344.398437-.769532.695312-1.085938.292969-.308594.640625-.5625 1.027344-.742188.800781-.375 1.722656-.375 2.519531 0 .386719.179688.734375.433594 1.027344.742188.292969.316406.53125.683594.695312 1.085938.339844.824218.339844 1.757812 0 2.585937ZM87.246094 5.488281c-.523438-1.242187-1.5-2.234375-2.730469-2.765625-1.273437-.542968-2.714844-.542968-3.988281 0-1.230469.53125-2.207032 1.523438-2.730469 2.765625-.539063 1.289063-.539063 2.742188 0 4.03125.527344 1.238281 1.503906 2.226563 2.730469 2.753907 1.273437.546874 2.714844.546874 3.988281 0 1.226563-.527344 2.207031-1.515626 2.730469-2.753907.539062-1.289062.539062-2.742187 0-4.03125Zm-1.742188 3.308594c-.167968.398437-.402344.765625-.695312 1.085937-.289063.3125-.636719.566407-1.023438.75-.800781.371094-1.722656.371094-2.523437 0-.382813-.183593-.734375-.4375-1.023438-.75-.292969-.320312-.53125-.6875-.695312-1.085937-.339844-.828125-.339844-1.757813 0-2.585937.164062-.402344.398437-.769532.691406-1.085938.292969-.308594.640625-.5625 1.027344-.742188.800781-.375 1.722656-.375 2.519531 0 .386719.179688.734375.433594 1.027344.742188.296875.316406.53125.683594.695312 1.085938.34375.824218.34375 1.757812 0 2.585937ZM60.796875 7.917969c.375-.5625.5625-1.222657.5625-1.976563.003906-.472656-.082031-.945312-.253906-1.386718-.15625-.40625-.394531-.777344-.695313-1.089844-.304687-.308594-.671875-.550782-1.078125-.710938-.417969-.167968-.878906-.25-1.386719-.25h-5.296874v9.988282h1.890624V4.195312h3.40625c.332032 0 .597657.0625.792969.191407.1875.117187.34375.273437.460938.460937.105469.179688.175781.371094.214843.574219.03125.171875.050782.34375.054688.519531 0 .28125-.046875.527344-.140625.738282-.085937.195312-.207031.371093-.359375.523437-.140625.136719-.308594.246094-.492188.3125-.167968.066406-.347656.101563-.53125.101563h-1.929687c.375.546874 1.953125 2.773437 2.332031 3.304687.378906.527344.761719 1.046875 1.160156 1.566406h2.253907c-.808594-1.125-1.632813-2.246093-2.460938-3.355469.609375-.238281 1.132813-.660156 1.496094-1.214843ZM6.246094 3.4375H4.160156l-.488281-.90625H5.75ZM6.992188 4.796875H4.894531l-.492187-.90625h2.09375ZM7.738281 6.152344H5.625L5.136719 5.25h2.105469Zm0 0" />
          <path d="M12.359375 2.53125 9.042969 8.523438 7.988281 6.605469H5.871094l3.179687 5.886719 5.378907-9.960938Zm0 0" />
        </g>
      ),
      viewBox: "0 0 2940 480",
    },
    github: {
      path: (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </g>
      ),
    },
    google: {
      path: (
        <g>
          <path
            d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
            fill="#4285f4"
          />
          <path
            d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
            fill="#34a853"
          />
          <path
            d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
            fill="#fbbc04"
          />
          <path
            d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
            fill="#ea4335"
          />
        </g>
      ),
      viewBox: "0 0 533.5 544.3",
    },
  },
};


export default theme;