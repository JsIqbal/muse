# Makefile

start-app:
    # Your command to start the application (e.g., server and client)
    supervisord -c /etc/supervisord.conf

.PHONY: start-app
