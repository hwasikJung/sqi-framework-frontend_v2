<template>
  <div>
    <v-container>
      <v-card style="margin-bottom: 20px">
        <v-container>
          <v-subheader>내 프로필</v-subheader>
          <v-form
            v-model="valid"
          >
            <v-text-field
              label="닉네임"
              required
            />
            <v-btn
              color="blue"
              type="submit"
            >
              수정
            </v-btn>
          </v-form>
        </v-container>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "LoginIfo"
};
</script>

<style scoped>

</style>
