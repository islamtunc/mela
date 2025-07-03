# JNI Native Code for Mela

Place your Mela-generated assembly/object files here (e.g., mela_add.asm, mela_add.o).

Build with Android NDK to produce libmela.so for use in your Android app.

Example build command (from this directory):

    ndk-build NDK_PROJECT_PATH=. APP_BUILD_SCRIPT=./Android.mk

This will output libmela.so in the appropriate jniLibs/ directory for your target architecture.
