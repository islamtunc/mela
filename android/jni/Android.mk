# Bismillahirrahmanirahim
# Android.mk - NDK build config for Mela native code

LOCAL_PATH := $(call my-dir)

include $(CLEAR_VARS)
LOCAL_MODULE    := mela
LOCAL_SRC_FILES := mela_add.o
include $(BUILD_SHARED_LIBRARY)
# Elhamdulillahirabbulalemin
