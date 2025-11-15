#!/bin/bash
set -e

echo "Starting build process..."
echo "Current directory: $(pwd)"
echo "Contents of current directory:"
ls -la

echo ""
echo "Navigating to backend directory..."
cd backend

echo ""
echo "Contents of backend directory:"
ls -la

echo ""
echo "Installing dependencies..."
npm install --production

echo ""
echo "Build completed successfully!"
