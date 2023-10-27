# Use the official Node.js 16 image as the base image
FROM node:19

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./
COPY yarn.lock ./

# Install the dependencies
RUN npm install --force

# Copy the rest of the files
COPY . .

# Build the application
RUN npm run build

# Expose port 4000
EXPOSE 4000

# add environment variables
ENV NODE_ENV=production
#ENV PORT=4000
#ENV DATABASE_URL=postgresql://postgres:password@postgres:5432/bloom-pg?schema=public
#ENV NEXT_PUBLIC_S3_CLOUD_FRONT_URL=https://d3jm3hdd9b8409.cloudfront.net
#ENV JWT_SECRET=1234


# Start the application
CMD [ "npm", "start" ]
