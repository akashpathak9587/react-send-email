FROM node:lts-alpine
ENV NODE_ENV=production
ENV ALLOWED_ORIGIN=https://freelance-portfolio-p6y2.onrender.com
ENV RESEND_API_KEY=re_6mU9aAv9_832jnXpYz44XP3FDiEJynJrc
ENV PORT=3001
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent && mv node_modules ../
COPY . .
EXPOSE 3001
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
