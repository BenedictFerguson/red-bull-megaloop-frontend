#!/bin/bash

set -e
echo "Checking that you're online"
ping -c 1  1.1.1.1
echo "You are online, pulling the secrets now!"

cd ../../
echo "Switched to Root directory of project first."
echo $PWD
op inject --force -i ./apps/weather-frontend/.npmrc.tpl -o ./apps/weather-frontend/.npmrc
op inject --force -i ./apps/live-scoring-frontend/.npmrc.tpl -o ./apps/live-scoring-frontend/.npmrc
