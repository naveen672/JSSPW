#!/bin/bash

# Create tmp directory for PHP sessions if it doesn't exist
mkdir -p tmp

# Start the PHP server on port 5001
php -S 0.0.0.0:5001 router.php