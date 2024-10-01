from rest_framework import viewsets, routers
from ledger_app.models import UserModel, ItemModel
from .serializer import UserSerializer, ItemSerializer

class UserApi(viewsets.ModelViewSet):
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        queryset = UserModel.objects.all()
        L_id = self.request.query_params.get('id')
        if L_id:
            queryset = queryset.filter(user_id=L_id)
        return queryset

class ItemApi(viewsets.ModelViewSet):
    queryset = ItemModel.objects.all()
    serializer_class = ItemSerializer

    def get_queryset(self):
        queryset = ItemModel.objects.all()
        L_id = self.request.query_params.get('id')
        if L_id:
            queryset = queryset.filter(user_id=L_id)
        return queryset

router = routers.DefaultRouter()
router.register(r'user', UserApi)
router.register(r'item', ItemApi)
